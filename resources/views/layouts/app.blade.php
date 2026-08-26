<!DOCTYPE html>
<html lang="en">
<head>
  @include('components.head')
</head>
<body>
  @include('components.header')

  <main>
    @yield('content')
  </main>

  @include('components.footer')

  @include('components.scripts')
</body>
</html>
