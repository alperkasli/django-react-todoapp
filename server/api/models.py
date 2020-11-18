from django.db import models
from django.contrib.auth.models import User

class Account(User):
  def __str__(self):
    return self.username

class TaskCategory(models.Model):
  name = models.CharField(max_length=100)
  created_by = models.ForeignKey(Account, blank=True,null=True, on_delete=models.CASCADE)

class Task(models.Model):
  PRIORITIES = (
    ('low', 'low'),
    ('normal', 'normal'),
    ('high', 'high'),
  )
  title = models.CharField(max_length=255)
  priority = models.CharField(max_length=10, default='normal', choices=PRIORITIES)
  description = models.TextField(blank=True)
  completed = models.BooleanField(default=False, blank=True, null=True)
  due_date = models.DateField(auto_now_add=True, blank=True, null=True)
  user = models.ForeignKey(Account, blank=True,null=True, on_delete=models.CASCADE)
  category=models.ForeignKey(TaskCategory, on_delete=models.CASCADE, null=True, blank=True)

  def __str__(self):
    return self.title

class SharedTasks(models.Model):
  shared_by = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="shared_by")
  shared_to = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="shared_to")
  task = models.ForeignKey(Task, on_delete=models.CASCADE)

