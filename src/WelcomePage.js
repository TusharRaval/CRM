import React, { useState } from "react";
import './welcome.css';
import { jsPDF } from "jspdf";
import { Container, Row, Col, Card, Button, Form, Table } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WelcomePage = () => {
    // Sample data for the chart
    const chartData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // X-axis labels
        datasets: [
            {
                label: "Tasks Completed",
                data: [10, 15, 8, 12, 20, 18, 25], // Y-axis data points
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)",
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Days of the Week",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Tasks Completed",
                },
                beginAtZero: true,
            },
        },
    };

    // State for form input and leads/prospects list
    const [leadData, setLeadData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [leads, setLeads] = useState([]);
    const [prospectData, setProspectData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [prospects, setProspects] = useState([]);

    // State to track the active menu
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    // Handle input change for both leads and prospects
    const handleInputChange = (e, section) => {
        const { name, value } = e.target;
        if (section === "lead") {
            setLeadData({ ...leadData, [name]: value });
        } else if (section === "prospect") {
            setProspectData({ ...prospectData, [name]: value });
        }
    };

    // Handle form submission for leads
    const handleLeadFormSubmit = (e) => {
        e.preventDefault();
        if (leadData.name && leadData.email && leadData.phone) {
            setLeads([...leads, leadData]);
            setLeadData({ name: "", email: "", phone: "" });
        }
    };

    // Handle form submission for prospects
    const handleProspectFormSubmit = (e) => {
        e.preventDefault();
        if (prospectData.name && prospectData.email && prospectData.phone) {
            setProspects([...prospects, prospectData]);
            setProspectData({ name: "", email: "", phone: "" });
        }
    };

    // Handle menu item click
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const [bills, setBills] = useState([]);
    const [billData, setBillData] = useState({
        clientName: "",
        amount: "",
        dueDate: "",
    });

    const [events, setEvents] = useState([]);
    const [eventData, setEventData] = useState({
        eventName: "",
        date: "",
        description: "",
    });

    // Bill Form Handlers
    const handleBillInputChange = (e) => {
        const { name, value } = e.target;
        setBillData({ ...billData, [name]: value });
    };

    const handleBillFormSubmit = (e) => {
        e.preventDefault();
        if (billData.clientName && billData.amount && billData.dueDate) {
            setBills([...bills, billData]);
            setBillData({ clientName: "", amount: "", dueDate: "" });
        }
    };

    const generateBillPDF = (bill) => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Bill Statement", 20, 20);
        doc.setFontSize(12);
        doc.text(`Client Name: ${bill.clientName}`, 20, 30);
        doc.text(`Amount: ${bill.amount}`, 20, 40);
        doc.text(`Due Date: ${bill.dueDate}`, 20, 50);
        doc.save(`bill-${bill.clientName}.pdf`);
    };

    // Event Form Handlers
    const handleEventInputChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleEventFormSubmit = (e) => {
        e.preventDefault();
        if (eventData.eventName && eventData.date && eventData.description) {
            setEvents([...events, eventData]);
            setEventData({ eventName: "", date: "", description: "" });
        }
    };

    
    const [quotationData, setQuotationData] = useState({
        clientName: "",
        product: "",
        amount: "",
    });
    const [quotations, setQuotations] = useState([]);

   
    const handleQuotationFormSubmit = (e) => {
        e.preventDefault();
        if (quotationData.clientName && quotationData.product && quotationData.amount) {
            setQuotations([...quotations, quotationData]);
            setQuotationData({ clientName: "", product: "", amount: "" });
        }
    };

    const generateQuotationPDF = (quotation) => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Quotation", 20, 20);
        doc.setFontSize(12);
        doc.text(`Client Name: ${quotation.clientName}`, 20, 30);
        doc.text(`Product: ${quotation.product}`, 20, 40);
        doc.text(`Amount: ${quotation.amount}`, 20, 50);
        doc.save(`quotation-${quotation.clientName}.pdf`);
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h4 className="text-white text-center my-3">CRM.io</h4>
                <ul className="sidebar-menu">
                    <li
                        className={activeMenu === "Dashboard" ? "active" : ""}
                        onClick={() => handleMenuClick("Dashboard")}
                    >
                        Dashboard
                    </li>
                    <li
                        className={activeMenu === "Leads" ? "active" : ""}
                        onClick={() => handleMenuClick("Leads")}
                    >
                        Leads
                    </li>
                    <li
                        className={activeMenu === "Prospects" ? "active" : ""}
                        onClick={() => handleMenuClick("Prospects")}
                    >
                        Prospects
                    </li>
                    <li
                        className={activeMenu === "Quotations" ? "active" : ""}
                        onClick={() => handleMenuClick("Quotations")}
                    >
                        Quotations
                    </li>
                    
                    <li
                        className={activeMenu === "Bills" ? "active" : ""}
                        onClick={() => handleMenuClick("Bills")}
                    >
                        Bills
                    </li>
                    <li
                        className={activeMenu === "Events" ? "active" : ""}
                        onClick={() => handleMenuClick("Events")}
                    >
                        Events
                    </li>
                </ul>
            </div>

            {/* Main Dashboard */}
            <div className="main-content">
                <Container fluid>
                    {activeMenu === "Dashboard" && (
                        <>
                            {/* Dashboard Cards */}
                            <Row className="mb-4">
                                <Col xs={12} md={6} lg={3}>
                                    <Card className="stat-card">
                                        <Card.Body>
                                            <Card.Title>Leads</Card.Title>
                                            <h2>120</h2>
                                            <p>+10% since last week</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <Card className="stat-card">
                                        <Card.Body>
                                            <Card.Title>Prospects</Card.Title>
                                            <h2>80</h2>
                                            <p>+5% since last week</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <Card className="stat-card">
                                        <Card.Body>
                                            <Card.Title>Quotations</Card.Title>
                                            <h2>60</h2>
                                            <p>-2% since last week</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <Card className="stat-card">
                                        <Card.Body>
                                            <Card.Title>Bills</Card.Title>
                                            <h2>50</h2>
                                            <p>+8% since last week</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={8}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Workflow Chart</Card.Title>
                                            <div className="chart-container">
                                                <Line data={chartData} options={chartOptions} />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Events</Card.Title>
                                            <ul>
                                                <li>Meeting with Client A - 3 PM</li>
                                                <li>Follow-up with Client B - 5 PM</li>
                                                <li>Prepare Report - 6 PM</li>
                                            </ul>
                                            <Button variant="primary">View All Events</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                    )}

                    {activeMenu === "Leads" && (
                        <>
                            {/* Lead Generation Form */}
                            <Row className="mb-4">
                                <Col xs={12} md={8}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Lead Generation</Card.Title>
                                            <Form onSubmit={handleLeadFormSubmit}>
                                                <Form.Group controlId="formName">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        value={leadData.name}
                                                        onChange={(e) => handleInputChange(e, "lead")}
                                                        placeholder="Enter name"
                                                    />
                                                </Form.Group>

                                                <Form.Group controlId="formEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        value={leadData.email}
                                                        onChange={(e) => handleInputChange(e, "lead")}
                                                        placeholder="Enter email"
                                                    />
                                                </Form.Group>

                                                <Form.Group controlId="formPhone">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="phone"
                                                        value={leadData.phone}
                                                        onChange={(e) => handleInputChange(e, "lead")}
                                                        placeholder="Enter phone number"
                                                    />
                                                </Form.Group>

                                                <Button variant="primary" type="submit">
                                                    Add Lead
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            {/* Leads Table */}
                            <Row>
                                <Col xs={12}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Leads List</Card.Title>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {leads.map((lead, index) => (
                                                        <tr key={index}>
                                                            <td>{lead.name}</td>
                                                            <td>{lead.email}</td>
                                                            <td>{lead.phone}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                    )}

                    {activeMenu === "Prospects" && (
                        <>
                            {/* Prospect Generation Form */}
                            <Row className="mb-4">
                                <Col xs={12} md={8}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Prospect Generation</Card.Title>
                                            <Form onSubmit={handleProspectFormSubmit}>
                                                <Form.Group controlId="formName">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        value={prospectData.name}
                                                        onChange={(e) => handleInputChange(e, "prospect")}
                                                        placeholder="Enter name"
                                                    />
                                                </Form.Group>

                                                <Form.Group controlId="formEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        value={prospectData.email}
                                                        onChange={(e) => handleInputChange(e, "prospect")}
                                                        placeholder="Enter email"
                                                    />
                                                </Form.Group>

                                                <Form.Group controlId="formPhone">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="phone"
                                                        value={prospectData.phone}
                                                        onChange={(e) => handleInputChange(e, "prospect")}
                                                        placeholder="Enter phone number"
                                                    />
                                                </Form.Group>

                                                <Button variant="primary" type="submit">
                                                    Add Prospect
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            {/* Prospects Table */}
                            <Row>
                                <Col xs={12}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Prospects List</Card.Title>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {prospects.map((prospect, index) => (
                                                        <tr key={index}>
                                                            <td>{prospect.name}</td>
                                                            <td>{prospect.email}</td>
                                                            <td>{prospect.phone}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                        
                    )}
                    {activeMenu === "Quotations" && (
                        <>
                            <Row className="mb-4">
                                <Col xs={12} md={8}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Generate Quotation</Card.Title>
                                            <Form onSubmit={handleQuotationFormSubmit}>
                                                <Form.Group controlId="formClientName">
                                                    <Form.Label>Client Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="clientName"
                                                        value={quotationData.clientName}
                                                        onChange={(e) => handleInputChange(e, "quotation")}
                                                        placeholder="Enter client name"
                                                    />
                                                </Form.Group>

                                                <Form.Group controlId="formProduct">
                                                    <Form.Label>Product</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="product"
                                                        value={quotationData.product}
                                                        onChange={(e) => handleInputChange(e, "quotation")}
                                                        placeholder="Enter product"
                                                    />
                                                </Form.Group>

                                                <Form.Group controlId="formAmount">
                                                    <Form.Label>Amount</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        name="amount"
                                                        value={quotationData.amount}
                                                        onChange={(e) => handleInputChange(e, "quotation")}
                                                        placeholder="Enter amount"
                                                    />
                                                </Form.Group>

                                                <Button variant="primary" type="submit">Generate Quotation</Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Quotations List</Card.Title>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Client Name</th>
                                                        <th>Product</th>
                                                        <th>Amount</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {quotations.map((quotation, index) => (
                                                        <tr key={index}>
                                                            <td>{quotation.clientName}</td>
                                                            <td>{quotation.product}</td>
                                                            <td>{quotation.amount}</td>
                                                            <td>
                                                                <Button variant="success" onClick={() => generateQuotationPDF(quotation)}>Download PDF</Button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                    )}
                    {activeMenu === "Bills" && (
                        <>
                            <Row className="mb-4">
                                <Col xs={12} md={8}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Add Bill</Card.Title>
                                            <Form onSubmit={handleBillFormSubmit}>
                                                <Form.Group controlId="formClientName">
                                                    <Form.Label>Client Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="clientName"
                                                        value={billData.clientName}
                                                        onChange={handleBillInputChange}
                                                        placeholder="Enter client name"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="formAmount">
                                                    <Form.Label>Amount</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        name="amount"
                                                        value={billData.amount}
                                                        onChange={handleBillInputChange}
                                                        placeholder="Enter amount"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="formDueDate">
                                                    <Form.Label>Due Date</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        name="dueDate"
                                                        value={billData.dueDate}
                                                        onChange={handleBillInputChange}
                                                    />
                                                </Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Add Bill
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Bills List</Card.Title>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Client Name</th>
                                                        <th>Amount</th>
                                                        <th>Due Date</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {bills.map((bill, index) => (
                                                        <tr key={index}>
                                                            <td>{bill.clientName}</td>
                                                            <td>{bill.amount}</td>
                                                            <td>{bill.dueDate}</td>
                                                            <td>
                                                                <Button
                                                                    variant="success"
                                                                    onClick={() => generateBillPDF(bill)}
                                                                >
                                                                    Download PDF
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                    )}

                    {activeMenu === "Events" && (
                        <>
                            <Row className="mb-4">
                                <Col xs={12} md={8}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Add Event</Card.Title>
                                            <Form onSubmit={handleEventFormSubmit}>
                                                <Form.Group controlId="formEventName">
                                                    <Form.Label>Event Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="eventName"
                                                        value={eventData.eventName}
                                                        onChange={handleEventInputChange}
                                                        placeholder="Enter event name"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="formDate">
                                                    <Form.Label>Date</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        name="date"
                                                        value={eventData.date}
                                                        onChange={handleEventInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="formDescription">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        name="description"
                                                        value={eventData.description}
                                                        onChange={handleEventInputChange}
                                                        placeholder="Enter description"
                                                    />
                                                </Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Add Event
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Events List</Card.Title>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Event Name</th>
                                                        <th>Date</th>
                                                        <th>Description</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {events.map((event, index) => (
                                                        <tr key={index}>
                                                            <td>{event.eventName}</td>
                                                            <td>{event.date}</td>
                                                            <td>{event.description}</td>
                                                            <td>
                                                                <Button variant="success">Mark as Completed</Button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                    )}
                </Container>
            </div>
        </div>
    );
};

export default WelcomePage;
