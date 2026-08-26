<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class DashboardController extends Controller
{
    /**
     * Display the Saastify Client & Admin Operations Dashboard.
     */
    public function index(): View
    {
        return view('admin.dashboard');
    }
}
