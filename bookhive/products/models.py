from django.db import models

class Category(models.Model):
    name=models.CharField(max_length=100)
    image=models.ImageField(upload_to='category_images/', blank=True, null=True)
    
    def __str__(self):
        return self.name


class Product(models.Model):
    name=models.CharField(max_length=200)
    category=models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    description=models.CharField(max_length=499)
    weight=models.IntegerField(max_length=5, null=True, blank=True)
    price=models.DecimalField(max_digits=10, decimal_places=2)
    image=models.ImageField(upload_to='product_images/', blank=True, null=True)
    launch=models.BooleanField(default=False)
    
    
    def __str__(self):
        return f"{self.name}: {self.category} : {self.price}"


