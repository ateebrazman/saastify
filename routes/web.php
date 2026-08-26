<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group.
|
*/

// Homepage
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/index.html', [PageController::class, 'home']);

// Products & Solutions
Route::get('/products', [PageController::class, 'products'])->name('products');
Route::get('/products.html', [PageController::class, 'products']);
Route::get('/pages/products', [PageController::class, 'products']);
Route::get('/pages/products.html', [PageController::class, 'products']);

// Developers Hub
Route::get('/developers', [PageController::class, 'developers'])->name('developers');
Route::get('/developers.html', [PageController::class, 'developers']);
Route::get('/pages/developers', [PageController::class, 'developers']);
Route::get('/pages/developers.html', [PageController::class, 'developers']);

// About Us
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/about.html', [PageController::class, 'about']);
Route::get('/pages/about', [PageController::class, 'about']);
Route::get('/pages/about.html', [PageController::class, 'about']);

// Contact Us
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/contact.html', [PageController::class, 'contact']);
Route::get('/contacts', [PageController::class, 'contact']);
Route::get('/contacts.html', [PageController::class, 'contact']);
Route::get('/in/contacts', [PageController::class, 'contact']);
Route::get('/pages/contact', [PageController::class, 'contact']);
Route::get('/pages/contact.html', [PageController::class, 'contact']);

// Resources Center
Route::get('/resources', [PageController::class, 'resources'])->name('resources');
Route::get('/resources.html', [PageController::class, 'resources']);
Route::get('/pages/resources', [PageController::class, 'resources']);
Route::get('/pages/resources.html', [PageController::class, 'resources']);

// Operations & Admin Dashboard
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/dashboard.html', [DashboardController::class, 'index']);
Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
Route::get('/admin/dashboard.html', [DashboardController::class, 'index']);

