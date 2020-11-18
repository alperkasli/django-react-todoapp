from django.urls import path
from . import views

urlpatterns = [
	path('register/', views.register_user, name="register"),
	path('login/', views.login_user, name="login"),
	path('logout/', views.logout_user, name="logout"),
	path('refresh_login/', views.refresh_login, name="refresh-login"),

	path('task-list/', views.taskList, name="task-list"),
	path('task-detail/<str:pk>/', views.taskDetail, name="task-detail"),
	path('task-create/', views.taskCreate, name="task-create"),

	path('user-list/', views.userList, name="user-list"),
	path('share-task/', views.shareTask, name="share-task"),
	path('shared-tasks-list/', views.sharedtaskList, name="shared-tasks-list"),

	path('task-update/<str:pk>/', views.taskUpdate, name="task-update"),
	path('toggle-task-completed/<str:pk>/', views.taskToggleCompleted, name="toggle-task-completed"),
	path('task-delete/<str:pk>/', views.taskDelete, name="task-delete"),

	path('get-task-categories/', views.getTaskCategories, name="get-task-categories"),
	path('create-task-category/', views.createTaskCategory, name="create-task-category"),
]
