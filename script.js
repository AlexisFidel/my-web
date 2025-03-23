// Mejorar las animaciones iniciales con secuencias más complejas
window.addEventListener("load", () => {
    // Pantalla de carga con animación más suave y avanzada
    const loader = document.querySelector(".loader");
    if (loader) {
        // Agregamos animaciones adicionales para la pantalla de carga
        gsap.to(".loader-line", {
            boxShadow: "0 0 30px #FF69B4, inset 0 0 30px #FF69B4",
            duration: 1,
            repeat: -1,
            yoyo: true
        });
        
        gsap.to(".loader-logo", {
            textShadow: "0 0 20px #FF69B4, 0 0 40px #FF69B4",
            duration: 1.5,
            repeat: -1,
            yoyo: true
        });
        
        // Animación de salida para el loader
        const tl = gsap.timeline();
        tl.to(loader, {
            opacity: 0,
            duration: 0.8,
            delay: 1.5, // Dar tiempo para que se vea la animación
            ease: "power3.out",
            onComplete: () => {
                loader.style.display = "none";
            }
        });
        
        // Animación de introducción para la página completa
        if (document.querySelector("header")) {
            tl.from("header", {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "elastic.out(1, 0.8)"
            }, "-=0.2");
        }
        
        // Animación más impactante para la sección home
        if (document.querySelector(".home-content h1")) {
            tl.from(".home-content h1", {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: "back.out(1.7)"
            }, "-=0.5");
        }
        
        if (document.querySelector(".typing-text")) {
            tl.from(".typing-text", {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, "-=0.3");
            
            // Implementar la animación de escritura
            const typingTextElement = document.querySelector(".typing-text span");
            if (typingTextElement) {
                const roles = ["Técnico", "Estudiante", "Autodidacta"];
                let currentRoleIndex = 0;
                
                function typeText() {
                    const currentRole = roles[currentRoleIndex];
                    let charIndex = 0;
                    
                    function type() {
                        if (charIndex < currentRole.length) {
                            typingTextElement.textContent += currentRole.charAt(charIndex);
                            charIndex++;
                            setTimeout(type, 100); // Velocidad de escritura
                        } else {
                            setTimeout(erase, 2000); // Esperar antes de borrar
                        }
                    }
                    
                    function erase() {
                        if (charIndex > 0) {
                            typingTextElement.textContent = currentRole.substring(0, charIndex-1);
                            charIndex--;
                            setTimeout(erase, 50); // Velocidad de borrado
                        } else {
                            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                            setTimeout(typeText, 500); // Esperar antes de escribir el siguiente rol
                        }
                    }
                    
                    type();
                }
                
                typeText(); // Iniciar la animación de escritura
            }
        }
        
        if (document.querySelector(".home-content p")) {
            tl.from(".home-content p", {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, "-=0.5");
        }
        
        if (document.querySelector(".home-img img")) {
            tl.from(".home-img img", {
                scale: 0,
                rotation: 12,
                opacity: 0,
                duration: 1.2,
                ease: "elastic.out(1, 0.4)"
            }, "-=0.8");
        }
        
        if (document.querySelector(".social-icons a")) {
            tl.from(".social-icons a", {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                ease: "back.out(2)",
                duration: 0.6
            }, "-=0.6");
        }
        
        if (document.querySelector(".btn")) {
            tl.from(".btn", {
                scale: 0,
                opacity: 0,
                ease: "back.out(1.7)",
                duration: 0.6
            }, "-=0.4");
        }
    }
    
    // Funcionalidad de menú móvil
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    if (menuToggle && mobileMenu && closeMenu) {
        // Abrir menú
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            // Animación de entrada para los elementos del menú
            gsap.from('.mobile-nav a', {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.2
            });
        });
        
        // Cerrar menú
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }
    
    // Header sticky en scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
        }
    });
});

// Agregar preloader para imágenes
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    let imagesLoaded = 0;
    
    images.forEach(img => {
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                // Todas las imágenes cargadas
                console.log('Todas las imágenes cargadas');
            }
        };
        
        // Para imágenes ya cargadas en caché
        if (img.complete) {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                console.log('Todas las imágenes cargadas desde caché');
            }
        }
    });
});
// Mejorar las animaciones iniciales con secuencias más complejas
window.addEventListener("load", () => {
    // Pantalla de carga con animación más suave
    const loader = document.querySelector(".loader");
    if (loader) {
        const tl = gsap.timeline();
        tl.to(loader, {
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            onComplete: () => {
                loader.style.display = "none";
            }
        });
        
        // Animación de introducción para la página completa
        if (document.querySelector("header")) {
            tl.from("header", {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "elastic.out(1, 0.8)"
            }, "-=0.2");
        }
        
        // Animación más impactante para la sección home
        if (document.querySelector(".home-content h1")) {
            tl.from(".home-content h1", {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: "back.out(1.7)"
            }, "-=0.5");
        }
        
        if (document.querySelector(".typing-text")) {
            tl.from(".typing-text", {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, "-=0.3");
            
            // Implementar la animación de escritura
            const typingTextElement = document.querySelector(".typing-text span");
            if (typingTextElement) {
                const roles = ["Técnico", "Estudiante", "Autodidacta"];
                let currentRoleIndex = 0;
                
                function typeText() {
                    const currentRole = roles[currentRoleIndex];
                    let charIndex = 0;
                    
                    function type() {
                        if (charIndex < currentRole.length) {
                            typingTextElement.textContent += currentRole.charAt(charIndex);
                            charIndex++;
                            setTimeout(type, 100); // Velocidad de escritura
                        } else {
                            setTimeout(erase, 2000); // Esperar antes de borrar
                        }
                    }
                    
                    function erase() {
                        if (charIndex > 0) {
                            typingTextElement.textContent = currentRole.substring(0, charIndex-1);
                            charIndex--;
                            setTimeout(erase, 50); // Velocidad de borrado
                        } else {
                            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                            setTimeout(typeText, 500); // Esperar antes de escribir el siguiente rol
                        }
                    }
                    
                    type();
                }
                
                typeText(); // Iniciar la animación de escritura
            }
        }
        
        if (document.querySelector(".home-content p")) {
            tl.from(".home-content p", {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, "-=0.5");
        }
        
        if (document.querySelector(".home-img img")) {
            tl.from(".home-img img", {
                scale: 0,
                rotation: 12,
                opacity: 0,
                duration: 1.2,
                ease: "elastic.out(1, 0.4)"
            }, "-=0.8");
        }
        
        if (document.querySelector(".social-icons a")) {
            tl.from(".social-icons a", {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                ease: "back.out(2)",
                duration: 0.6
            }, "-=0.6");
        }
        
        if (document.querySelector(".btn")) {
            tl.from(".btn", {
                scale: 0,
                opacity: 0,
                ease: "back.out(1.7)",
                duration: 0.6
            }, "-=0.4");
        }
    }
});

// Mejorar el cursor personalizado
const cursor = document.querySelector(".cursor");
if (cursor) {
    const cursorinner = document.createElement("div");
    cursorinner.className = "cursor-inner";
    document.body.appendChild(cursorinner);

    document.addEventListener("mousemove", (e) => {
        // Movimiento principal del cursor con suavidad
        gsap.to(cursor, {
            left: e.pageX,
            top: e.pageY,
            duration: 0.2,
            ease: "power2.out"
        });
        
        // Movimiento del cursor interno más rápido
        gsap.to(cursorinner, {
            left: e.pageX,
            top: e.pageY,
            duration: 0.1
        });
    });
    
    // Efecto mejorado para hover
    const hoverElements = document.querySelectorAll("a, button, .btn, .social-icons a, .skill-card");
    hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-active");
            cursorinner.classList.add("cursor-inner-active");
            
            gsap.to(cursor, {
                scale: 2,
                backgroundColor: "rgba(255, 105, 180, 0.1)",
                border: "1px solid #FF69B4",
                duration: 0.3
            });
        });
        
        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-active");
            cursorinner.classList.remove("cursor-inner-active");
            
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "transparent",
                border: "2px solid #FF69B4",
                duration: 0.3
            });
        });
    });
}

// Menú móvil
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            gsap.fromTo(
                mobileMenu,
                { opacity: 0, x: "100%" },
                { opacity: 1, x: "0%", duration: 0.5, ease: "power3.out" }
            );
        });
        
        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                gsap.to(mobileMenu, {
                    opacity: 0,
                    x: "100%",
                    duration: 0.5,
                    ease: "power3.in",
                    onComplete: () => {
                        mobileMenu.classList.remove('active');
                    }
                });
            });
        }
        
        if (mobileLinks.length > 0) {
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    gsap.to(mobileMenu, {
                        opacity: 0,
                        x: "100%",
                        duration: 0.5,
                        ease: "power3.in",
                        onComplete: () => {
                            mobileMenu.classList.remove('active');
                        }
                    });
                });
            });
        }
    }
}

// Animaciones de scroll avanzadas
function initScrollAnimations() {
    // Animación para la sección About
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
        ScrollTrigger.create({
            trigger: aboutSection,
            start: "top 70%",
            onEnter: () => {
                if (document.querySelector("#about h2")) {
                    gsap.fromTo(
                        "#about h2", 
                        { opacity: 0, y: -50 }, 
                        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
                    );
                }
                
                // Animación para las tarjetas about
                const aboutCards = document.querySelectorAll(".about-card");
                if (aboutCards.length > 0) {
                    gsap.fromTo(
                        aboutCards, 
                        { opacity: 0, y: 50, scale: 0.8 }, 
                        { 
                            opacity: 1, 
                            y: 0, 
                            scale: 1, 
                            duration: 0.8, 
                            stagger: 0.2,
                            ease: "back.out(1.7)"
                        }
                    );
                }
            },
            once: true
        });
    }
    
    // Animación para la sección Skills
    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
        ScrollTrigger.create({
            trigger: skillsSection,
            start: "top 70%",
            onEnter: () => {
                if (document.querySelector("#skills h2")) {
                    gsap.fromTo(
                        "#skills h2", 
                        { opacity: 0, y: -50 }, 
                        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
                    );
                }
                
                const skillCards = document.querySelectorAll(".skill-card");
                if (skillCards.length > 0) {
                    gsap.fromTo(
                        skillCards, 
                        { opacity: 0, y: 50, scale: 0.8 }, 
                        { 
                            opacity: 1, 
                            y: 0, 
                            scale: 1, 
                            duration: 0.8, 
                            stagger: 0.2,
                            ease: "back.out(1.7)"
                        }
                    );
                    
                    // Animar las barras de progreso
                    setTimeout(() => {
                        document.querySelectorAll(".skill-progress").forEach(progress => {
                            const progressValue = progress.getAttribute("data-progress");
                            gsap.to(progress, {
                                width: `${progressValue}%`,
                                duration: 1.5,
                                ease: "power3.out"
                            });
                        });
                    }, 500);
                }
            },
            once: true
        });
    }
    
    // Animación para la sección Proyectos
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
        ScrollTrigger.create({
            trigger: projectsSection,
            start: "top 70%",
            onEnter: () => {
                if (document.querySelector("#projects h2")) {
                    gsap.fromTo(
                        "#projects h2", 
                        { opacity: 0, y: -50 }, 
                        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
                    );
                }
                
                const projectCards = document.querySelectorAll(".project-card");
                if (projectCards.length > 0) {
                    gsap.fromTo(
                        projectCards, 
                        { opacity: 0, y: 50 }, 
                        { 
                            opacity: 1, 
                            y: 0, 
                            duration: 0.8, 
                            stagger: 0.3,
                            ease: "back.out(1.7)"
                        }
                    );
                }
            },
            once: true
        });
    }
    
    // Animación para la sección Educación
    const educationSection = document.querySelector("#education");
    if (educationSection) {
        ScrollTrigger.create({
            trigger: educationSection,
            start: "top 70%",
            onEnter: () => {
                if (document.querySelector("#education h2")) {
                    gsap.fromTo(
                        "#education h2", 
                        { opacity: 0, y: -50 }, 
                        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
                    );
                }
                
                const timelineItems = document.querySelectorAll(".timeline-item");
                if (timelineItems.length > 0) {
                    gsap.fromTo(
                        timelineItems, 
                        { opacity: 0, x: -50 }, 
                        { 
                            opacity: 1, 
                            x: 0, 
                            duration: 0.8, 
                            stagger: 0.3,
                            ease: "power3.out"
                        }
                    );
                }
            },
            once: true
        });
    }
    
    // Paralaje sutil para fondos
    const sections = document.querySelectorAll("section");
    if (sections.length > 0) {
        sections.forEach(section => {
            const bg = section.querySelector('.bg-parallax');
            if (bg) {
                gsap.to(bg, {
                    y: '30%',
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        });
    }
}

// Formulario de contacto interactivo 
function initContactForm() {
    const contactForm = document.getElementById("contact-form");
    const contactConfirmation = document.querySelector(".contact-confirmation");
    const submitBtn = document.querySelector(".submit-btn");
    
    if (contactForm && contactConfirmation && submitBtn) {
        // Efecto 3D en hover para el formulario completo
        contactForm.addEventListener("mousemove", function(e) {
            const rect = contactForm.getBoundingClientRect();
            const x = e.clientX - rect.left; // posición x dentro del formulario
            const y = e.clientY - rect.top;  // posición y dentro del formulario
            
            // Calcular rotación basada en la posición del cursor
            const xRotation = ((y - rect.height / 2) / rect.height) * 5;
            const yRotation = ((x - rect.width / 2) / rect.width) * -5;
            
            gsap.to(contactForm, {
                rotationX: xRotation,
                rotationY: yRotation,
                transformStyle: "preserve-3d",
                duration: 0.5,
                ease: "power2.out"
            });
        });
        
        // Restablecer rotación cuando el cursor sale del formulario
        contactForm.addEventListener("mouseleave", function() {
            gsap.to(contactForm, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
        
        // Animación de entrada para cada campo del formulario cuando obtiene foco
        const formInputs = document.querySelectorAll(".form-group input, .form-group textarea");
        if (formInputs.length > 0) {
            formInputs.forEach((input) => {
                input.addEventListener("focus", function() {
                    const underline = this.parentNode.querySelector(".underline");
                    const label = this.parentNode.querySelector("label");
                    
                    if (underline) {
                        gsap.to(underline, {
                            scaleX: 1,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                        
                        // Iniciar la animación gradient-shift
                        gsap.to(underline, {
                            backgroundPosition: "100% 50%",
                            duration: 3,
                            repeat: -1,
                            yoyo: true,
                            ease: "linear"
                        });
                    }
                    
                    if (label) {
                        gsap.to(label, {
                            top: "-2.5rem",
                            left: 0,
                            fontSize: "1.3rem",
                            letterSpacing: "0.05em",
                            fontWeight: 500,
                            color: "#FF69B4",
                            textShadow: "0 0 8px rgba(255, 105, 180, 0.3)",
                            duration: 0.3
                        });
                    }
                });
                
                input.addEventListener("blur", function() {
                    if (this.value === "") {
                        const underline = this.parentNode.querySelector(".underline");
                        const label = this.parentNode.querySelector("label");
                        
                        if (underline) {
                            gsap.to(underline, {
                                scaleX: 0,
                                duration: 0.3,
                                ease: "power2.in"
                            });
                            
                            // Detener la animación gradient-shift
                            gsap.killTweensOf(underline, { backgroundPosition: true });
                        }
                        
                        if (label) {
                            gsap.to(label, {
                                top: "1.2rem",
                                left: "0.8rem",
                                fontSize: "1.6rem",
                                letterSpacing: "0",
                                fontWeight: "normal",
                                color: "rgba(255, 255, 255, 0.6)",
                                textShadow: "none",
                                duration: 0.3
                            });
                        }
                    }
                });
                
                // Verificar si el campo ya tiene valor al cargar
                if (input.value !== "") {
                    const label = input.parentNode.querySelector("label");
                    if (label) {
                        gsap.set(label, {
                            top: "-2.5rem",
                            left: 0,
                            fontSize: "1.3rem",
                            letterSpacing: "0.05em",
                            fontWeight: 500,
                            color: "#FF69B4"
                        });
                    }
                }
            });
        }
        
        // Mejorar la transición de envío del formulario
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const particles = [];
            const particleCount = 20;
            const colors = ["#FF69B4", "#ff4d9e", "#ff9ec5"];
            const container = document.createElement("div");
            container.className = "particles-container";
            contactForm.appendChild(container);
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement("div");
                particle.className = "particle";
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.animationDuration = `${10 + Math.random() * 20}s`;
                particle.style.animationDelay = `${Math.random() * 2}s`;
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                container.appendChild(particle);
                particles.push(particle);
            }
            
            gsap.to(contactForm, {
                y: -20,
                opacity: 0,
                duration: 0.5,
                delay: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    if (container) {
                        container.remove();
                    }
                    
                    contactForm.classList.add("slide-out");
                    contactConfirmation.classList.add("slide-in");
                    
                    const tl = gsap.timeline();
                    
                    tl.fromTo(
                        contactConfirmation,
                        { 
                            opacity: 0, 
                            scale: 0.8,
                            y: 30,
                            x: "100%",
                            rotation: -5
                        },
                        { 
                            opacity: 1, 
                            scale: 1,
                            y: 0,
                            x: 0,
                            rotation: 0,
                            duration: 0.7, 
                            ease: "elastic.out(1.2)",
                            clearProps: "x,y,scale,rotation"
                        }
                    );
                    
                    const confirmIcon = contactConfirmation.querySelector("i");
                    if (confirmIcon) {
                        tl.fromTo(
                            confirmIcon,
                            { scale: 0.5, opacity: 0.7 },
                            { 
                                scale: 1.2, 
                                opacity: 1,
                                duration: 0.5,
                                ease: "back.out(2)"
                            }
                        ).to(confirmIcon, {
                            scale: 1.1,
                            duration: 1,
                            repeat: -1,
                            yoyo: true,
                            ease: "sine.inOut"
                        });
                    }
                    
                    const confirmationText = contactConfirmation.querySelectorAll("h3, p");
                    tl.fromTo(
                        confirmationText,
                        { y: 30, opacity: 0 },
                        { 
                            y: 0, 
                            opacity: 1, 
                            stagger: 0.1,
                            duration: 0.5, 
                            ease: "power2.out" 
                        }
                    );
                }
            });
            
            setTimeout(() => {
                contactForm.reset();
                
                gsap.to(contactConfirmation, {
                    opacity: 0,
                    scale: 0.8,
                    x: "100%",
                    y: 20,
                    duration: 0.6,
                    ease: "back.in(1.5)",
                    onComplete: () => {
                        contactConfirmation.classList.remove("slide-in");
                        contactForm.classList.remove("slide-out");
                        
                        const confirmIcon = contactConfirmation.querySelector("i");
                        if (confirmIcon) {
                            gsap.killTweensOf(confirmIcon);
                        }
                        
                        gsap.fromTo(
                            contactForm,
                            { opacity: 0, y: -20 },
                            { 
                                opacity: 1, 
                                y: 0, 
                                duration: 0.6, 
                                ease: "power2.out" 
                            }
                        );
                    }
                });
            }, 4000);
        });
        // Animar el efecto de brillo en el botón
        submitBtn.addEventListener("mouseenter", function() {
            gsap.to(this, {
                y: -3,
                boxShadow: "0 8px 20px rgba(255, 105, 180, 0.4)",
                duration: 0.3
            });
            
            // Animar el icono
            const icon = this.querySelector("i");
            if (icon) {
                gsap.to(icon, {
                    x: 5,
                    duration: 0.3
                });
            }
            
            // Animar el efecto ::before
            gsap.fromTo(
                this,
                { "--before-left": "-100%" },
                { "--before-left": "100%", duration: 0.5, ease: "power1.inOut" }
            );
        });
        
        submitBtn.addEventListener("mouseleave", function() {
            gsap.to(this, {
                y: 0,
                boxShadow: "0 5px 15px rgba(255, 105, 180, 0.3)",
                duration: 0.3
            });
            
            // Resetear animación del icono
            const icon = this.querySelector("i");
            if (icon) {
                gsap.to(icon, {
                    x: 0,
                    duration: 0.3
                });
            }
        });
    }
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    initContactForm();
    
    // Crear partículas de fondo
    createBackgroundParticles();
});

// Función para crear partículas flotantes en el fondo
function createBackgroundParticles() {
    const contactSection = document.querySelector(".contact");
    if (contactSection) {
        const particlesContainer = document.createElement("div");
        particlesContainer.className = "particles-container";
        contactSection.appendChild(particlesContainer);
        
        // Crear máximo 10 partículas como se indica en el CSS
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            particlesContainer.appendChild(particle);
            
            // Posición aleatoria
            const randomX = Math.random() * 100;
            const randomDelay = Math.random() * 15;
            
            gsap.set(particle, {
                left: `${randomX}%`,
                top: "100%",
                opacity: 0
            });
            
            // Animación continua
            gsap.to(particle, {
                top: "-20%",
                x: 50,
                opacity: 0.8,
                duration: 15,
                delay: randomDelay,
                repeat: -1,
                onRepeat: () => {
                    gsap.set(particle, {
                        left: `${Math.random() * 100}%`,
                        top: "100%"
                    });
                }
            });
        }
    }
}
// Inicializar todas las animaciones
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Inicializar menú móvil
    initMobileMenu();
    
    // Inicializar animaciones de scroll
    initScrollAnimations();
    
    // Inicializar formulario interactivo
    initContactForm();
    
    // Animación para el menú de navegación
    const navLinks = document.querySelectorAll("nav a, .mobile-nav a");
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", function(e) {
                const href = this.getAttribute("href");
                if (href.startsWith("#")) {
                    e.preventDefault();
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        gsap.to(window, {
                            scrollTo: {
                                y: targetSection,
                                offsetY: 70
                            },
                            duration: 1,
                            ease: "power3.inOut"
                        });
                    }
                }
            });
        });
    }
    
    // Efecto de "scroll reveal" para todos los encabezados de sección
    document.querySelectorAll("section h2").forEach(heading => {
        ScrollTrigger.create({
            trigger: heading,
            start: "top 80%",
            onEnter: () => {
                gsap.fromTo(
                    heading,
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
                );
            },
            once: true
        });
    });
});