<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('users/Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/about', function() {
    return Inertia::render('users/About');
});
Route::get('/education', function() {
    return Inertia::render('users/Education');
});
Route::get('/community', function() {
    return Inertia::render('users/Community');
});
Route::get('/experience', function() {
    return Inertia::render('users/Experience');
});
Route::get('/committee', function() {
    return Inertia::render('users/Committee');
});
Route::get('/activity', function() {
    return Inertia::render('users/Activity');
});
Route::get('/gallery', function() {
    return Inertia::render('users/Gallery');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
