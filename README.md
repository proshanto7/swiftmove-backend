# swiftmove-backend


# Contact API (Express + MongoDB)


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


