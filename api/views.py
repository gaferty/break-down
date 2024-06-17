from django.shortcuts import render

from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status
from api.models import Project
from api.serializers import ProjectSerializer


@api_view(['GET', 'POST'])
def project_list(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many = True)
        return Response(serializer.data)

    elif request.method =='POST':
        serializer = ProjectSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def project_details(request, pk):

    try:
        project = Project.objects.get(pk = pk)
    except Project.DoesNotExist:
        return HttpResponse(status = status.HTTP_404_NOT_FOUND)


    if request.method == "GET":
        serializer= ProjectSerializer(project)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = ProjectSerializer(project, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        project.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
# Create your views here.
