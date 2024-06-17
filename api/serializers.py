from rest_framework import serializers
from api.models import Project, PROJECT_LENGTH

class ProjectSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    title = serializers.CharField(required = True, allow_blank = False, max_length = 75)
    description = serializers.CharField(style={'base_template': 'textarea.html'})
    length = serializers.ChoiceField(choices = PROJECT_LENGTH, default = 'medium')
    # author = serializers.ReadOnlyField(source = 'author.username',blank = True)

    def create(self, validated_data):
        return Project.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.length = validated_data.get('length', instance.length)
        # instance.author = validated_data.get('author', instance.author)
        instance.save()
        return instance
