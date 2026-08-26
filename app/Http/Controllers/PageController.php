<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class PageController extends Controller
{
    /**
     * Display the Saastify homepage.
     */
    public function home(): View
    {
        return view('index');
    }

    /**
     * Display the Products & Solutions catalog.
     */
    public function products(): View
    {
        return view('pages.products');
    }

    /**
     * Display the Developer Hub and API Documentation.
     */
    public function developers(): View
    {
        return view('pages.developers');
    }

    /**
     * Display the About page.
     */
    public function about(): View
    {
        return view('pages.about');
    }

    /**
     * Display the Contact page.
     */
    public function contact(): View
    {
        return view('pages.contact');
    }

    /**
     * Display the Resources and Knowledge Center.
     */
    public function resources(): View
    {
        return view('pages.resources');
    }
}

