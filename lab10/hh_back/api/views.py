from django.shortcuts import render
from api.models import Company, Vacancy
from django.http.response import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict

# Create your views here.
from api.serializers import VacancySerializer, CompanySerializer


@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        # companies_json = [c.to_json() for c in companies]
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company_desc = data.get('desc', '')
        company_city = data.get('city', 'online')
        company_address = data.get('address', '')

        if company_desc == '' or company_name == '':
            return JsonResponse({'error': "can't create an empty field"})

        company = Company.objects.create(
            name=company_name,
            description=company_desc,
            city=company_city,
            address=company_address
        )
        serializer = CompanySerializer(company, many=False)
        return JsonResponse(serializer.data)


@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CompanySerializer(company, many=False)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'PUT':
        data = json.loads(request.body)

        new_company_name = data.get('name', company.name)
        new_company_desc = data.get('desc', company.description)
        new_company_city = data.get('city', company.city)
        new_company_address = data.get('address', company.address)

        company.name = new_company_name
        company.description = new_company_desc
        company.city = new_company_city
        company.address = new_company_address
        company.save()
        serializer = CompanySerializer(company, many=False)
        return JsonResponse(serializer.data)

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})


@csrf_exempt
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        vacancies = company.vacancies.all()
        vacancies_json = [v.to_json() for v in vacancies]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        # vacancies_json = [c.to_json() for c in vacancies]
        return JsonResponse(serializer.data, safe=False)

    if request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancy_desc = data.get('desc', '')
        vacancy_company = data.get('company', '')
        if vacancy_name == '' or vacancy_desc == '' or vacancy_company == '':
            return JsonResponse({'error': "can't create an empty field"})

        vacancy_salary = float(data.get('salary', '0'))
        company = Company.objects.get(id=int(vacancy_company))
        vacancy = Vacancy.objects.create(
            name=vacancy_name,
            salary=vacancy_salary,
            description=vacancy_desc,
            company=company
        )
        serializer = VacancySerializer(vacancy, many=False)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy, many=False)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = json.loads(request.body)

        new_vacancy_name = data.get('name', vacancy.name)
        new_vacancy_desc = data.get('desc', vacancy.description)
        new_vacancy_salary = data.get('salary', vacancy.salary)

        vacancy.name = new_vacancy_name
        vacancy.description = new_vacancy_desc
        vacancy.salary = new_vacancy_salary
        vacancy.save()
        serializer = VacancySerializer(vacancy, many=False)
        return JsonResponse(serializer.data)

    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})


@csrf_exempt
def top_ten_vacancy(request):
    vacancies = Vacancy.objects.order_by("-salary")[:10]
    # vacancies_json = [v.to_json() for v in vacancies]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
