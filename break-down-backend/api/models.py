from django.db import models
from django.conf import settings
# Create your models here.
PROJECT_LENGTH = (('SHORT','short'),('MEDIUM', 'medium'), ('LONG','long'))
DIFFICULTY = (('EASY', 'easy'), ('MEDIUM','medium'), ('HARD','hard'))
class Project(models.Model):
    created =models.DateTimeField(auto_now_add= True)
    title = models.CharField(blank = True, max_length=75)
    description = models.TextField()
    length = models.CharField(choices = PROJECT_LENGTH, default='medium')
    difficulty = models.CharField(choices = DIFFICULTY, default = 'MEDIUM')
    author = models.ForeignKey('auth.User', related_name='projects', on_delete=models.CASCADE)
    def __str__(self):
        return f"{self.author} : {self.title}"
    class Meta:
        ordering = ['created']

class Step(models.Model):
    step = models.CharField(blank = True, max_length=125)
    description = models.TextField()
    #Should really be called order
    seq_no = models.IntegerField()
    difficulty = models.CharField(choices = DIFFICULTY, default = 'MEDIUM')
    length = models.CharField(choices = PROJECT_LENGTH, default = 'MEDIUM')
    project = models.ForeignKey(Project, related_name = 'steps', on_delete= models.CASCADE)
    def __str__(self):
        return self.step

    class Meta:
        unique_together = ['project', 'seq_no']
        ordering = ['seq_no']
