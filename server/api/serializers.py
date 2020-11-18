from rest_framework import serializers
from rest_framework import fields
from rest_framework.validators import UniqueValidator
from .models import SharedTasks, Task, Account, TaskCategory

class TaskSerializer(serializers.ModelSerializer):
	user = serializers.SerializerMethodField()
	def get_user(self,task):
		return AccountSerializer(task.user).data
	class Meta:
		model = Task
		fields ='__all__'
		depth = 1

class AccountSerializer(serializers.ModelSerializer):
	class Meta:
		model = Account
		fields = ('id','username', 'email')

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=32,validators=[UniqueValidator(queryset=Account.objects.all())])
    password = serializers.CharField(min_length=6, max_length=100,write_only=True)
    email = serializers.EmailField(allow_blank=True, validators=[UniqueValidator(queryset=Account.objects.all())])

    def create(self, validated_data):
        user = Account(username=validated_data['username'],email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model = Account
        fields = ('id', 'username', 'password', 'email')

class TaskCategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = TaskCategory
		fields ='__all__'

class ShareTaskSerializer(serializers.ModelSerializer):
	shared_by = serializers.SerializerMethodField()
	shared_to = serializers.SerializerMethodField()
	task = serializers.SerializerMethodField()
	def get_shared_by(self,task):
		return AccountSerializer(task.shared_by).data
	def get_shared_to(self,task):
		return AccountSerializer(task.shared_to).data
	def get_task(self,task):
		return TaskSerializer(task.task).data
	class Meta:
		model = SharedTasks
		fields = '__all__'
		depth = 2