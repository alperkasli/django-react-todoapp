from django.contrib.auth import authenticate , login, logout
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.status import HTTP_201_CREATED, HTTP_202_ACCEPTED, HTTP_400_BAD_REQUEST, HTTP_402_PAYMENT_REQUIRED, HTTP_403_FORBIDDEN
from .serializers import ShareTaskSerializer, TaskCategorySerializer, TaskSerializer, AccountSerializer, UserSerializer
from .models import Account, SharedTasks, Task, TaskCategory
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny

@api_view(['POST'])
@csrf_exempt
@permission_classes([AllowAny])
def login_user(request):
	username = request.data['username']
	password = request.data['password']

	user = authenticate(username=username, password=password)
	if user:
		token, _ = Token.objects.get_or_create(user=user)
		login(request, user)
		return Response({ 'token':token.key,
                     'username':user.username,
                     'email':user.email }, status=status.HTTP_200_OK)
	
	return Response(status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def refresh_login(request):
	user = Account.objects.get(username=request.user.username)
	print(user)
	if user:
		token, _ = Token.objects.get_or_create(user=user)
		login(request, user)
		return Response({ 'token':token.key,
                     'username':user.username,
                     'email':user.email }, status=status.HTTP_200_OK)
	return Response(status=status.HTTP_401_UNAUTHORIZED)
	
@api_view(['POST'])
@csrf_exempt
@permission_classes([AllowAny])
def register_user(request):
	# if Account.objects.get(username=request.data['username']).exists():
	# 	return Response("user already exist", status=status.HTTP_406_NOT_ACCEPTABLE)

	serializer = UserSerializer(data=request.data)
	if serializer.is_valid():
		user = serializer.save()
		if user:
			token, _ = Token.objects.get_or_create(user=user)
			login(request, user)
			return Response({ 'token':token.key,
						'username':user.username,
						'email':user.email }, status=status.HTTP_201_CREATED)

	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def logout_user(request):
	request.user.auth_token.delete()
	logout(request)
	return Response("user logged out")

@api_view(['GET'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def userList(request):
	users = Account.objects.all().exclude(username=request.user.username).order_by("-pk")
	userSerializer = AccountSerializer(users, many=True)
	return Response(userSerializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def taskList(request):
	tasks = Task.objects.filter(user=request.user).order_by("-pk")
	taskSerializer = TaskSerializer(tasks, many=True)
	return Response(taskSerializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def sharedtaskList(request):
	tasks = SharedTasks.objects.filter(shared_to=request.user).order_by("-pk")
	taskSerializer = ShareTaskSerializer(tasks, many=True)
	return Response(taskSerializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def shareTask(request):
	task = Task.objects.get(id=request.data['taskId'])
	taskFrom = Account.objects.get(username=request.user.username)
	taskTo = Account.objects.get(id=request.data['taskToId'])
	obj = SharedTasks.objects.create(task=task,shared_by=taskFrom,shared_to=taskTo)
	print(obj)
	return Response("succesfully shared.", status=HTTP_202_ACCEPTED)

@api_view(['GET'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def taskDetail(request, pk):
	tasks = Task.objects.get(id=pk)
	serializer = TaskSerializer(tasks, many=False)
	return Response(serializer.data)


@api_view(['POST'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def taskCreate(request):
	serializer = TaskSerializer(data=request.data)
	if serializer.is_valid():
		task=serializer.save()
		task.user = request.user.account
		category = TaskCategory.objects.get(id=request.data['category_id'])
		task.category = category
		task.save()
		return Response(serializer.data, status=HTTP_201_CREATED)
	return Response(serializer.data, status=HTTP_400_BAD_REQUEST)
	

@api_view(['POST'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def taskUpdate(request, pk):
	task = Task.objects.get(id=pk)
	serializer = TaskSerializer(instance=task, data=request.data)
	if task.user.username == request.user.username:
		if serializer.is_valid():
			obj=serializer.save()
			category = TaskCategory.objects.get(id=request.data['category_id'])
			obj.category = category
			obj.save()
		return Response(serializer.data)
	else:
		return Response(status=HTTP_403_FORBIDDEN)


@api_view(['PATCH'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def taskToggleCompleted(request, pk):
	task = Task.objects.get(id=pk)
	if task.user.username == request.user.username:
		serializer = TaskSerializer(instance=task,data=request.data,partial=True)
		if serializer.is_valid():
			obj = serializer.save()
			obj.completed= not task.completed
			obj.save()
		else:
			print(serializer.errors)
		return Response(serializer.data)
	else:
		return Response(status=HTTP_403_FORBIDDEN)


@api_view(['DELETE'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def taskDelete(request, pk):
	task = Task.objects.get(id=pk)
	task.delete()
	return Response('Item succsesfully delete!')

@api_view(['GET'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def getTaskCategories(request):
	categories = TaskCategory.objects.filter(created_by=request.user).values()
	return Response(categories)


@api_view(['POST'])
@csrf_exempt
@authentication_classes([TokenAuthentication])
def createTaskCategory(request):
	serializer = TaskCategorySerializer(data=request.data)
	print(serializer)
	if serializer.is_valid():
		category = serializer.save()
		category.created_by = request.user.account
		category.save()
		return Response({ 'category': serializer.data })
	
	Response('upps, something wrong')

