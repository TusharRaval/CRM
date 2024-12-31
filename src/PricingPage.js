import React from 'react';

const pricingPlans = [{
    title: 'Basic', price: '$9.99', features: ['Manage up to 1000 leads with essential CRM features.', 'Access basic reporting tools to track performance.', 'Secure cloud storage with 5 GB capacity.'],
    buttonText: 'Choose Plan',
    buttonVariant: 'outline-primary',
},
{
    title: 'Pro',
    price: '$19.99',
    features: ['Manage up to 5000 leads with advanced automation tools.', 'Access detailed analytics and custom dashboards.', 'Integrate with third-party apps like Slack and Google Workspace.', 'Secure cloud storage with 50 GB capacity.'],
    buttonText: 'Choose Plan',
    buttonVariant: 'primary',
},
{
    title: 'Enterprise',
    price: '$29.99',
    features: ['Unlimited lead management with AI-driven insights.', 'Advanced role-based access control for teams.', 'Dedicated account manager and 24/7 premium support.', 'API access for seamless integration with custom apps.', 'Secure cloud storage with unlimited capacity.'],
    buttonText: 'Choose Plan',
    buttonVariant: 'outline-primary',
},
];
const PricingPage = () => {
  return (
    <section className="container-fluid py-5 pr" id="pricing">
      <h2 className="text-center mb-5">Our Pricing Plans</h2>
      <div className="row">
        {pricingPlans.map((plan, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="card-title">{plan.title}</h5>
                <h6 className="card-price text-muted">{plan.price}</h6>
                <ul className="list-unstyled text-start my-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <button className={`btn btn-${plan.buttonVariant} w-100`}>{plan.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPage;
