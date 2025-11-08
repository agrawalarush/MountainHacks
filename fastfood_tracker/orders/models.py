from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=120)
    restaurant = models.CharField(max_length=120, blank=True)
# store a URL or a short recipe; you can use both if you want
    recipe_url = models.URLField(blank=True)
    recipe_text = models.TextField(blank=True)

    def __str__(self): return self.name

class Purchase(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name="purchases")
    price = models.DecimalField(max_digits=7, decimal_places=2) # e.g. 9999.99 max
    bought_at = models.DateTimeField(auto_now_add=True)
    comment = models.TextField(blank=True) # “extra sauce”, “combo”, etc.

    def __str__(self): return f"{self.item.name} - ${self.price}"
