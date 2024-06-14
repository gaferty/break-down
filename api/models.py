from django.db import models
from django.conf import settings
# Create your models here.

class Project(models.Model):
    created =models.DateTimeField(auto_now_add= True)
    title = models.CharField(blank = True, max_length=75)
    description = models.TextField()
    length = models.TextChoices("length","SHORT MEDIUM LONG")
    author = models.ForeignKey('auth.User', related_name= 'api', on_delete= models.CASCADE)

    class Meta:
        ordering = ['created']
