from django.contrib import admin
from products.models import *

admin.site.register(Category)

class ProductAdmin(admin.ModelAdmin):
    list_display=['name', 'category', 'price']
    

admin.site.register(Product, ProductAdmin)
