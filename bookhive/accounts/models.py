from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_superuser(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email field must be set')
        
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        email=self.normalize_email(email)
        user=self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user


class User(AbstractUser):
    username=None
    email=models.EmailField(unique=True, blank=None, null=None)
    login_count=models.PositiveIntegerField(default=0)
    
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['password']
    
    objects=CustomUserManager()
