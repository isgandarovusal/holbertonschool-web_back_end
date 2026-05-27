#!/usr/bin/env python3
"""
This module provides a regular function to create and return an asyncio.Task
from the asynchronous wait_random coroutine.
"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Takes an integer max_delay and returns an asyncio.Task that executes
    the wait_random coroutine.
    """
    return asyncio.create_task(wait_random(max_delay))
