from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard_view, name='dashboard'),
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('task/add/', views.task_create_view, name='task_add'),
    path('task/<int:pk>/edit/', views.task_update_view, name='task_edit'),
    path('task/<int:pk>/delete/', views.task_delete_view, name='task_delete'),
]
