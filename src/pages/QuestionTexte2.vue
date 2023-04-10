<template>
    <main class="container-xl">
        <!-- Mode mobile -->
        <section class="d-lg-none bg-black px-5">
    
            <div class="text-center py-5">
                <label class="text-white basker">On peut tout te reprocher sauf :</label>
            </div>
    
            <div class="text-center">
            <img src="/images/Qtext_img2.png" class="img-fluid w-auto">
            </div>
    
            <div class="form-check bd_custom my-5">
                <label class="text-center form-check-label text-white inter" for="flexRadioDefault1">
                    Ton hospitalité
                </label>
            </div>
    
            <div class="form-check bd_custom my-5">
                <label class="text-center form-check-label text-white inter" for="flexRadioDefault1">
                    Ton écoute
                </label>
            </div>
    
            <div class="form-check bd_custom my-5">
                <label class="text-center form-check-label text-white inter" for="flexRadioDefault1">
                    Ton engagement
                </label>
            </div>
    
            <div class="form-check bd_custom my-5">
                <label class="text-center form-check-label text-white inter" for="flexRadioDefault1">
                    Ton organisation
                </label>
            </div>
    
            <!-- l'icone boutton suivant -->
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn" role="button"> <a href="./questions-img2"><img class="arrow" src="/images/arrow.png"></a></button>
            </div>
    
            <!-- Logo -->
            <div class="text-center">
                <img src="/images/logo-WHITE.png" class="img-fluid w-25">
            </div>
        </section>
    
        <!-- Mode bureau -->
        <section class="d-none d-lg-block bg-black overflow-hidden">
            <div class="row gx-5">
                <div class="col-6 py-5"><img src="/images/Qtext_img_dektop2.png" class="img-fluid"></div>
                <div class="col-6 px-5">
                    <div class="text-center py-5">
                        <label class=" text-white basker">On peut tout te reprocher sauf :</label>
                    </div>
                    <div class="form-check bd_custom">
                        <label class="text-center form-check-label text-white inter" for="flexRadioDefault1">
                       Ton hospitalité
                        </label>
                    </div>
                    <div class="form-check bd_custom my-5">
                        <label class="text-center form-check-label text-white inter" for="flexRadioDefault1">
                            Ton écoute
                        </label>
                    </div>
                    <div class="form-check bd_custom my-5">
                        <label class="text-center form-check-label text-white inter" for="flexRadioDefault1">
                            Ton engagement
                        </label>
                    </div>
                    <div class="form-check bd_custom my-5">
                        <label class="text-center form-check-label text-white inter" for="flexRadioDefault1">
                            Ton organisation
                        </label>
                    </div>

                    <!-- l'icone boutton suivant -->
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn" role="button"> <a href="./questions-img2"><img class="arrow" src="/images/arrow.png"></a></button>
                    </div>
    
                    <!-- Logo -->
                    <div class="text-center">
                        <img src="/images/logo-WHITE.png" class="img-fluid w-25">
                    </div>
                </div>

            </div>
        </section>
    </main>
    </template>
    
    <style scoped>
    
    .basker{
        font-family: "Libre Baskerville", serif;
        font-size: 25px;
    }
    .inter{
        font-family: "Inter", sans-serif;
        font-size: 24px;
    }
    
    .bd_custom{
        border-width: 1px;
        border-style: solid;
        border-color: #EDE9CA;
    }
    
    .arrow{
        background-color: black;
        width: 5vh;
        background-position-y: 200px;
    }    
    .img_custom{
        background-position-x: 100px;
    }
    
    </style>