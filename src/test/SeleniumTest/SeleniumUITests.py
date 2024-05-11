import unittest

import selenium.common
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager  # pip install webdriver-manager
from selenium.webdriver.chrome.service import Service as ChromeService


class MyTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
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
            self.driver.find_element(by=By.XPATH, value='//*[@id="root"]/div/main/section/div/div/div[2]/div/div['
                                                        '2]/div/div[1]/div[1]/div/div[2]/h3/a')
        except selenium.common.JavascriptException as e:
            error_count += 1

        self.assertEqual(error_count, 0)

    @classmethod
    def tearDownClass(cls):
        # This method runs once after all tests are done
        cls.driver.quit()


if __name__ == '__main__':
    unittest.main()
