from rest_framework import serializers
from api.models import Project, PROJECT_LENGTH
from django.contrib.auth.models import User

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source = 'author.username', default = User.objects.get(pk = 1))
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'length', 'author']

class UserSerializer(serializers.ModelSerializer):
    projects = serializers.HyperlinkedRelatedField(many=True, view_name = 'project-detail', read_only = True)

    class Meta:
        model = User
        fields =['id', 'url', 'username', 'projects']
