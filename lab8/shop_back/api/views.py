from django.shortcuts import render
from api.models import Product, Category
from django.http.response import JsonResponse


# Create your views here.

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, id):
    # products = Product.objects.all()
    # find = [p.to_json() for p in products if p.id == id]
    # return JsonResponse(find, safe=False)
    product = Product.objects.filter(id=id).first()
    if product is not None:
        product_json = product.to_json()
        return JsonResponse(product_json, safe=False)
    else:
        return JsonResponse({'error': 'Product not found'}, status=404)


def category_list(request):
    categories = Category.objects.all()
    c_json = [c.to_json() for c in categories]
    return JsonResponse(c_json, safe=False)


def category_detail(request, id):
    category = Category.objects.filter(id=id).first()
    if category is not None:
        return JsonResponse(category.to_json(), safe=False)
    else:
        return JsonResponse({'ERROR':' Category not found'}, safe=False)


def product_list_by_category(request, id):
    category = Category.objects.get(id=id)
    products = category.products.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
