 

<script>
   // import { Button } from '@skeletonlabs/skeleton';
  </script>

<div>hallo world	</div>

prefix sk
<div data-theme="wintry">
    <a class="sk-btn sk-variant-filled">Wintry Button</a>
  </div>
  
  <div data-theme="seafoam">
    <a class="sk-btn sk-variant-filled">Seafoam Button</a>
  </div>

  <hr>


  prefix tw sk
  <div data-theme="wintry">
      <a class="tw-sk-btn tw-sk-variant-filled">Wintry Button</a>
    </div>
    
    <div data-theme="seafoam">
      <a class="tw-sk-btn tw-sk-variant-filled">Seafoam Button</a>
    </div>
  
    <hr>

    prefix tw sk
    <div data-theme="wintry">
        <a class="tw:sk-btn tw:sk-variant-filled">Wintry Button</a>
      </div>
      
      <div data-theme="seafoam">
        <a class="tw:sk-btn tw:sk-variant-filled">Seafoam Button</a>
      </div>
    
      <hr>
no prefix

<div data-theme="wintry">
    <a class="btn variant-filled">Wintry Button</a>
  </div>
  
  <div data-theme="seafoam">
    <a class="btn variant-filled">Seafoam Button</a>
  </div>


  <hr>
  <hr>


  <!-- no <script> at all -->

<div data-theme="rocket" class="tw:min-h-screen tw:p-10 tw:space-y-6">
 <!-- Tailwind Test -->
 <div class="text-4xl font-bold text-blue-500">
    ✅ Tailwind Works
  </div>
    <!-- Tailwind Test -->
    <div class="tw:text-4xl tw:font-bold tw:text-blue-500">
      ✅ Tailwind Works
    </div>
      <!-- Tailwind Test -->
      <div class="tw-text-4xl tw-font-bold tw:text-blue-500">
        ✅ Tailwind Works
      </div>
    <!-- DaisyUI Test -->
    <button class="dy-btn dy-btn-primary">
      ✅ DaisyUI Button
    </button>
  
    <!-- Skeleton Test -->
    <a href="#" class="sk-btn sk-variant-filled">
      ✅ Skeleton Styled Button
    </a>
  
  </div>
  
  