const axios = require("axios");

const getRecommendation = async (req, res) => {

  try {

    const employee = req.body;

    const prompt = `
    Analyze this employee and provide:
    
    1. Promotion Recommendation
    2. Training Suggestions
    3. Performance Feedback
    4. Skill Improvement Advice

    Employee Details:
    
    Name: ${employee.name}
    Department: ${employee.department}
    Skills: ${employee.skills}
    Performance Score: ${employee.performanceScore}
    Experience: ${employee.experience}
    `;

    // OpenRouter API
    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "nvidia/nemotron-3-super-120b-a12b:free",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },

      {
        headers: {
          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json",
        },
      }
    );

    const result =
      response.data.choices[0].message.content;

    res.status(200).json({
      recommendation: result,
    });

  } catch (error) {

    console.log(
      error.response?.data || error.message
    );

    res.status(500).json({
      message: "AI recommendation failed",
    });

  }
};

module.exports = {
  getRecommendation,
};