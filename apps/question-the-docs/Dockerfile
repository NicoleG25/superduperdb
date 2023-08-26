FROM python:3.10-bullseye

WORKDIR /app

COPY backend backend

COPY frontend/ .

RUN apt-get update && apt-get install -y

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs

RUN npm install && npm run build

# Log the contents of the requirements file before installing
RUN cat backend/requirements.in

# Copy requirements.in and check its presence
COPY backend/requirements.in /app/requirements.in
RUN ls -l /app

# Install Python packages
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r /app/requirements.in

# RUN pip install requests
# RUN pip install pandas

# Verify installed packages
RUN pip list

CMD ["uvicorn", "backend.main:app", "--forwarded-allow-ips='*'", "--host", "0.0.0.0", "--port", "8080"]
