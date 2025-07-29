import React from 'react';
import { WidgetAboutDoctor } from '../components/WidgetAboutDoctor'
import { WidgetProfile } from '../components/WidgetProfile'
import { WidgetServicesAndConditions } from '../components/WidgetServicesAndConditions'
import { WidgetTestimonialCarousel } from '../components/WidgetTestimonialCarousel'
import { WidgetBookConsultation } from '../components/WidgetBookConsultation'
import { WidgetPricesAndPackages } from '../components/WidgetPricesAndPackages'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
      <WidgetAboutDoctor
        aboutText="Board-certified family physician with 10+ years of experience in telehealth and preventive care."
        education={[
        {
                "college": "Harvard Medical School",
                "activity": "MD"
        },
        {
                "college": "Johns Hopkins University",
                "activity": "Residency"
        }
]}
        hospitals={[
        "Massachusetts General Hospital",
        "Johns Hopkins Hospital"
]}
        certificates={[
        "Board Certified Family Medicine",
        "Telemedicine Certification"
]}
        languages={[
        "English",
        "Spanish",
        "French"
]}
        className=""
      />
      <WidgetProfile
        doctorName="Dr. Sarah Smith"
        specialty="Family Medicine"
        patients="2,500+"
        experience="10+ years"
        rating="4.9"
        imageSrc="/Storefront/Doctor Widget/DoctorImage.png"
        className=""
      />
      <WidgetServicesAndConditions
        specializedServices={[
        {
                "name": "Annual Physicals",
                "icon": "🏥"
        },
        {
                "name": "Chronic Disease Management",
                "icon": "🏥"
        },
        {
                "name": "Mental Health",
                "icon": "🏥"
        }
]}
        conditions={[
        "Diabetes",
        "Hypertension",
        "Depression",
        "Anxiety"
]}
        className=""
      />
      <WidgetTestimonialCarousel
        testimonials={[
        {
                "author": "Sarah J.",
                "age": 35,
                "condition": "Diabetes Management",
                "rating": 5,
                "quote": "Dr. Smith is amazing! Very thorough and caring."
        },
        {
                "author": "Mike C.",
                "age": 35,
                "condition": "Annual Physical",
                "rating": 5,
                "quote": "Convenient telehealth visits that actually work."
        },
        {
                "author": "Emily D.",
                "age": 35,
                "condition": "Mental Health",
                "rating": 5,
                "quote": "Professional, knowledgeable, and easy to talk to."
        }
]}
        overallRating={4.9}
        totalReviews={127}
        recommendedRate={98}
        className=""
      />
      <WidgetBookConsultation
        title="Book Consultation"
        zoomText="zoom"
        subheading="Ready to take the next step in your health journey?"
        description="Schedule a personal consultation with me to discuss your concerns, get expert advice, and create a care plan tailored just for you."
        features={[
        "Convenient virtual or in-person visits",
        "All questions welcome, no referral needed",
        "Easy, secure online booking"
]}
        imageSrc="/Storefront/Doctor Widget/Book Consultation/AbstractGradient.png"
        className=""
      />
      <WidgetPricesAndPackages
        consultationPricing={[
        {
                "name": "Initial Consultation",
                "price": "$120"
        },
        {
                "name": "Follow-Up Consultation",
                "price": "$90"
        },
        {
                "name": "Message Consultation",
                "price": "$25"
        }
]}
        packages={[
        {
                "name": "Diabetes Management",
                "price": "$250",
                "features": [
                        "2 visits free",
                        "Chat access 24x7",
                        "Diabetes Management"
                ]
        },
        {
                "name": "Chronic Care Management",
                "price": "$300",
                "features": [
                        "Monthly check-ins",
                        "Medication management",
                        "Lifestyle coaching"
                ]
        }
]}
        className=""
      />
    </main>
  );
}