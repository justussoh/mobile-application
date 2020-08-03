from AppiumLibrary import AppiumLibrary

class CustomAppiumLibrary(AppiumLibrary):
    def get_driver_instance(self):
        return self._current_application()

    # Terminate an App Package
    def TerminateApp(self, package):
        self._current_application().terminate_app(package)    

    # Open Deep Link
    def OpenDeepLink(self, url):
        # self.TerminateApp(package)
        # self._current_application().execute_script('mobile:deepLink',{'url': url, 'package': package})
        self._current_application().get(url)

    # Reference Keywords
    def KeyboardType(self, textToType):
        self._current_application().execute_script("var vKeyboard = target.frontMostApp().keyboard(); vKeyboard.typeString(\"" + textToType + "\");")

    def PressKeyboardButton(self, buttonToPress):
        self._current_application().execute_script("var vKeyboard = target.frontMostApp().keyboard(); vKeyboard.buttons()['" + buttonToPress + "'].tap();")
