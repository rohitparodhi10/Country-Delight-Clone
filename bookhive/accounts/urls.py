from django.urls import path, include
from accounts.views import *
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', UserRegisterView.as_view()),
    path('update/<int:id>/', UserUpdateView.as_view()),
    path('token/', CustomTokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]
