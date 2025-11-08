from django.contrib import admin
from .models import Item, Purchase

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'description')
    search_fields = ('name', "restaurant")

@admin.register(Purchase)
class PurchaseAdmin(admin.ModelAdmin):
    list_display = ('item', 'price', 'bought_at')
    list_filter = ('item__restaurant', "bought_at",)
    search_fields = ('item__name', 'comment')
