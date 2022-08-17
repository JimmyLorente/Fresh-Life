from django.db import models

# Create your models here.
class Task(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=50)
    cell = models.CharField(max_length=10)
    mensaje = models.TextField(blank=True)
    