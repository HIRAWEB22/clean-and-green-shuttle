import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeedbackForm } from "@/components/feedback-form";

const contactDetails = [
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Support Hotline",
    value: "+1 (234) 567-890",
    description: "For urgent queries.",
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email Support",
    value: "support@cleanandgreen.edu",
    description: "For suggestions & complaints.",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Office Address",
    value: "Student Union Building, Room 101",
    description: "Lost & Found desk.",
  },
];

export default function FeedbackPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We value your feedback. Let us know how we can improve the Clean and Green Shuttle Service.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <FeedbackForm />
                </CardContent>
            </Card>
        </div>

        <div className="space-y-8">
            {contactDetails.map(detail => (
                <Card key={detail.title} className="shadow-lg">
                    <CardHeader>
                        <div className="flex items-start gap-4">
                            <div className="bg-accent p-3 rounded-md mt-1">
                                {detail.icon}
                            </div>
                            <div>
                                <CardTitle className="text-xl">{detail.title}</CardTitle>
                                <p className="text-lg text-primary font-semibold mt-1">{detail.value}</p>
                                <p className="text-sm text-muted-foreground mt-1">{detail.description}</p>
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
