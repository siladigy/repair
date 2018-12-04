<?php

mail(
    "sgeorge7731@gmail.com",
    "test",
    $_REQUEST["fio"] . " " . $_REQUEST["phone"]

);