from django.shortcuts import render
from products.serializer import *
from products.models import *
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib import messages



class CategoryView(generics.ListCreateAPIView):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer
    permission_classes=[AllowAny]

class ProductView(generics.ListCreateAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer
    permission_classes=[AllowAny]

class NewLaunchProducts(generics.ListAPIView):
    queryset=Product.objects.filter(launch=True)
    serializer_class=ProductSerializer
    permission_classes={AllowAny}