from django.urls import path
from api import views

urlpatterns = [
    path('projects/', views.project_list),
    path('projects/<int:pk>/', views.project_details)
]
