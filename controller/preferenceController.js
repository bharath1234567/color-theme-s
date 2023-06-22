
const Preference = require('../model/userColorPreference')
exports. updatePreference = async (req, res) => {
    const { userId, theme } = req.body;

    try {
      // Check if the user preference already exists, if not, create a new one
      let preference = await Preference.findOne({ userId });
      if (!preference) {
        preference = new Preference({ userId });
      }
  
      preference.colorTheme = theme;
      await preference.save();
  
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error saving user preference:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }

  exports.  getPreference = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const preference = await Preference.findOne({ userId });
      res.status(200).json({ success: true, theme: preference?.colorTheme });
    } catch (error) {
      console.error('Error retrieving user preference:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }