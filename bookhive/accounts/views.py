from django.shortcuts import render
from accounts.serializer import *
from accounts.models import *
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView


class UserRegisterView(generics.ListCreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[AllowAny]

class UserUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsAuthenticated]
    lookup_field='id'
    
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class=CustomObtainPairSerializer