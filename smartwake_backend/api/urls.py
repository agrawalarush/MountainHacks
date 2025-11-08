from django.urls import path
from . import views

urlpatterns = [
    path('best-wake/', views.best_wake_time),
]
