from django.db import models
from django.conf import settings
# Create your models here.
PROJECT_LENGTH = (('SHORT','short'),('MEDIUM', 'medium'), ('LONG','long'))
class Project(models.Model):
    created =models.DateTimeField(auto_now_add= True)
    title = models.CharField(blank = True, max_length=75)
    description = models.TextField()
    length = models.CharField(choices = PROJECT_LENGTH, default='medium')
    author = models.ForeignKey('auth.User', related_name='projects', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']
