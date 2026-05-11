# swiftmove-backend


# Contact API 


{
  fullName: String (required),
  email: String (required),
  phone: String (required),
  moveDate: Date,
  movingFrom: String,
  movingTo: String,
  homeSize: String,
  additionalServices: [String],
  additionalDetails: String
}


| Endpoint | Method | Description |
| --- | --- | --- |
| ``/api/v1/contact/add-contact`` | POST | নতুন contact/quote যোগ করবে |
| ``/api/v1/contact/get-contact`` | GET | সব contact ডাটা দেখাবে |
| ``/api/v1/contact/delete-contact/:id`` | DELETE | নির্দিষ্ট contact ডিলিট করবে |
| ``/api/v1/contact/update-contact/:id`` | PATCH | নির্দিষ্ট contact আপডেট করবে |


# Pricing API 

{
  planName: String (required, unique),
  features: [String],   // Array of features
  cost: Number (required)
}


| Endpoint | Method | Description |
| --- | --- | --- |
| ``/api/v1/pricing/add-pricing`` | POST | নতুন pricing plan যোগ করবে |
| ``/api/v1/pricing/get-pricing`` | GET | সব pricing plan দেখাবে |
| ``/api/v1/pricing/update-pricing/:id`` | PATCH | নির্দিষ্ট pricing plan আপডেট করবে |
| ``/api/v1/pricing/delete-pricing/:id`` | DELETE | নির্দিষ্ট pricing plan ডিলিট করবে |


# Service API

{
  title: String (required, unique),
  description: String,
  price: Number
}

| Endpoint | Method | Description |
| --- | --- | --- |
| ``/api/v1/service/add-service`` | POST | নতুন service যোগ করবে |
| ``/api/v1/service/get-service`` | GET | সব service ডাটা দেখাবে |
| ``/api/v1/service/update-service/:id`` | PATCH | নির্দিষ্ট service আপডেট করবে |
| ``/api/v1/service/delete-service/:id`` | DELETE | নির্দিষ্ট service ডিলিট করবে |



# Testimonial API

{
  name: String (required),
  message: String (required),
  service: String (required), 
  rating: Number (1–5)
}

| Endpoint | Method | Description |
| --- | --- | --- |
| ``/api/v1/testimonial/add-testimonial`` | POST | নতুন testimonial যোগ করবে |
| ``/api/v1/testimonial/get-testimonial`` | GET | সব testimonial ডাটা দেখাবে |
| ``/api/v1/testimonial/update-testimonial/:id`` | PATCH | নির্দিষ্ট testimonial আপডেট করবে |
| ``/api/v1/testimonial/delete-testimonial/:id`` | DELETE | নির্দিষ্ট testimonial ডিলিট করবে |

