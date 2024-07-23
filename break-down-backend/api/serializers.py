from typing import Any, Dict
from rest_framework import serializers
from api.models import Project, PROJECT_LENGTH, Step
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source = 'author.username', default = User.objects.get(pk = 1))
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'length', 'author', 'difficulty']


class ProjectStepSerializer(serializers.ModelSerializer):
    steps = serializers.PrimaryKeyRelatedField(many = True, read_only = True)
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'length', 'author', 'difficulty', 'steps']



class UserSerializer(serializers.ModelSerializer):
    projects = serializers.HyperlinkedRelatedField(many=True, view_name = 'project-detail', read_only = True)

    class Meta:
        model = User
        fields =['id', 'url', 'username', 'projects']

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs: Dict[str, Any]) -> Dict[str, str]:
        data =  super( CustomTokenObtainPairSerializer, self).validate(attrs)
        data.update({'user': self.user.username})
        data.update({'user_id': self.user.id})
        return data

class StepSerializer(serializers.HyperlinkedModelSerializer):
    project = serializers.PrimaryKeyRelatedField(many = False, read_only = True)
    class Meta:
        model = Step
        fields = ['id', 'step', 'description', 'seq_no', 'difficulty', 'length', 'project']
55
