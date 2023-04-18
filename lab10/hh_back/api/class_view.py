from django.shortcuts import render
from django.utils.decorators import classonlymethod, method_decorator

from api.models import Company, Vacancy
from django.http.response import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.forms.models import model_to_dict
from django.views import View
from api.serializers import CompanySerializer, VacancySerializer

from rest_framework.views import APIView


@method_decorator(csrf_exempt, name='dispatch')
class CompanyListView(View):
    def post(self, request):
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
        # form = self.form_class(request.POST)
        # if form.is_valid():
        #     form.save()
        # return JsonResponse({"error": "can't add company"})

    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)


@method_decorator(csrf_exempt, name='dispatch')
class CompanyView(View):
    def put(self, request):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)
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

    def delete(self, request):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)
        company.delete()
        return JsonResponse({'deleted': True})

    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)
        serializer = CompanySerializer(company, many=False)
        return JsonResponse(serializer.data, safe=False)


class CompanyVacanciesView(View):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)
        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)


@method_decorator(csrf_exempt, name='dispatch')
class VacancyListView(View):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
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


@method_decorator(csrf_exempt, name='dispatch')
class VacancyView(View):
    def put(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)
        data = json.loads(request.body)

        new_vacancy_name = data.get('name', vacancy.name)
        new_vacancy_desc = data.get('desc', vacancy.description)
        new_vacancy_salary = data.get('salary', vacancy.salary)

        vacancy.name = new_vacancy_name
        vacancy.description = new_vacancy_desc
        vacancy.salary = new_vacancy_salary
        vacancy.save()
        serializer = VacancySerializer(vacancy, many=False)
        return JsonResponse(serializer.data, safe=False)

    def get(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)
        serializer = VacancySerializer(vacancy, many=False)
        return JsonResponse(serializer.data, safe=False)

    def delete(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)

        vacancy.delete()
        return JsonResponse({'deleted': True})


class TopVacancies(View):
    def get(self, request):
        vacancies = Vacancy.objects.order_by("-salary")[:10]
        # vacancies_json = [v.to_json() for v in vacancies]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
