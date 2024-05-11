import unittest

import os
import time
import selenium.common
from selenium import webdriver
from dotenv import load_dotenv, find_dotenv
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager  # pip install webdriver-manager
from selenium.webdriver.chrome.service import Service as ChromeService


class MyTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        dotenv_path = find_dotenv()  # finds the .env file path
        load_dotenv(dotenv_path)  # loads the .env file from the path found above
        chrome_driver_path = ChromeDriverManager().install()
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_experimental_option(name="detach", value=True)
        service = ChromeService(executable_path=chrome_driver_path)
        cls.driver = webdriver.Chrome(service=service, options=chrome_options)

    def setUp(self):
        # This method runs before each test method
        self.driver.get("http://localhost:3000")  # Navigate to a start page or reset state

    def test_login(self):
        error_count: int = 0
        try:
            login_button = self.driver.find_element(by=By.XPATH,
                                                    value='//*[@id="root"]/div/main/section/div/div/div[2]/div/div['
                                                          '2]/div/div[1]/div[1]/div/div[2]/h3/a')
            login_button.click()

            username = self.driver.find_element(by=By.XPATH, value='//*[@id="root"]/div/div/form/div[1]/input')
            username.send_keys(os.getenv("ECHO_USERNAME"))  # Gets the echo_username from .env

            password = self.driver.find_element(by=By.XPATH, value='//*[@id="root"]/div/div/form/div[2]/input')
            password.send_keys(os.getenv("ECHO_PASSWORD"))  # Gets the echo_password from .env

            login_button = self.driver.find_element(by=By.CLASS_NAME, value='btn-primary')
            login_button.click()

        except selenium.common.JavascriptException as e:
            error_count += 1

        self.assertEqual(error_count, 0)

    @classmethod
    def tearDownClass(cls):
        # This method runs once after all tests are done
        cls.driver.quit()


if __name__ == '__main__':
    unittest.main()
