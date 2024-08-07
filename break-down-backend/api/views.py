from django.shortcuts import render
from rest_framework import generics
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from api.models import Project, Step
from api.serializers import ProjectSerializer,ProjectStepSerializer, UserSerializer, CustomTokenObtainPairSerializer, StepSerializer
from django.contrib.auth.models import User
from rest_framework import permissions
from api.permissions import IsOwnerOrReadOnly
from rest_framework.decorators import api_view
from rest_framework.reverse import reverse
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
class ProjectList(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly]

    def get(self, request, format = None):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many = True)
        return Response(serializer.data)

    def post(self, request, format = None):
        new_data = request.data
        user  = User.objects.get(id = request.data['user'])
        print(new_data)
        new_data['author_id'] = user.id
        serializer = ProjectSerializer(data = new_data)

        if serializer.is_valid():
            serializer.save(author= user)
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        serializer.save(author_id = int(self.request.data['user']))


class ProjectDetail(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly]

    def get_object(self, pk):
        try:
            return Project.objects.get(pk = pk)
        except Project.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        project = self.get_object(pk)
        serializer = ProjectStepSerializer(project)
        return Response(serializer.data)

    def put(self, request, pk, format = None):
        project = self.get_object(pk)
        new_data = request.data
        user  = User.objects.get(id = request.data['author_id'])
        new_data['author'] = user.id
        print(new_data)
        serializer = ProjectSerializer(project, data = new_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format = None):
        project = self.get_object(pk)
        project.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'snippets': reverse('project-list', request=request, format=format),
    })

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class StepList(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly]
    queryset = Step.objects.all()
    serializer_class = StepSerializer

    def post(self, request, pk, format = None):
        new_data = request.data
        project  = Project.objects.get(id = pk)
        new_data['project'] = project.id
        serializer = StepSerializer(data = new_data)

        if serializer.is_valid():
            serializer.save(project= project)
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
