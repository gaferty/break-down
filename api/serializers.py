from rest_framework import serializers
from api.models import Project, PROJECT_LENGTH
from django.contrib.auth.models import User

class ProjectSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    title = serializers.CharField(required = True, allow_blank = False, max_length = 75)
    description = serializers.CharField(style={'base_template': 'textarea.html'})
    length = serializers.ChoiceField(choices = PROJECT_LENGTH, default = 'medium')
    author = serializers.ReadOnlyField(source = 'author.username', default = User.objects.get(pk = 1))

    def create(self, validated_data):
        return Project.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.length = validated_data.get('length', instance.length)
        instance.author = validated_data.get('author', instance.author)
        instance.save()
        return instance

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'length', 'author']

class UserSerializer(serializers.ModelSerializer):
    projects = serializers.PrimaryKeyRelatedField(many=True, queryset = Project.objects.all())

    class Meta:
        model = User
        fields =['id']
