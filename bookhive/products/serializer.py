from rest_framework import serializers
from products.models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=['id', 'name', 'image']
    
    def validate_name(self, value):
        if not value:
            raise serializers.ValidationError("its must to provide category name")
        return value
        

class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    class Meta:
        model=Product
        fields=['name', 'category', 'category_name', 'description', 'weight', 'price', 'image', 'launch']
    
    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError("Price must be positive")
        return value
    