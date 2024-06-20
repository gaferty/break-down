from django.urls import path
from api import views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = format_suffix_patterns([
    path('', views.api_root),
    path('projects/', views.ProjectList.as_view(), name = 'project-list'),
    path('projects/<int:pk>/', views.ProjectDetail.as_view(), name = 'project-detail'),
    path('users/', views.UserList.as_view(), name = 'user-list'),
    path('users/<int:pk>/', views.UserDetail.as_view(), name = 'user-detail'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
])
