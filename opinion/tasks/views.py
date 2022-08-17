from django.shortcuts import render, redirect
from .models import Task

# Create your views here.
def list_tasks(request):
    task=Task.objects.all()
    return render(request,'list_tasks.html', {"tasks": task})


def create_task(request):
    task= Task(nombre=request.POST['nombre'], direccion=request.POST['direccion'], cell=request.POST['cell'], mensaje=request.POST['mensaje'])
    task.save()
    return redirect('/tasks/')

def delete_task(request, task_id):
    task = Task.objects.get(id=task_id)
    task.delete()
    return redirect('/tasks')