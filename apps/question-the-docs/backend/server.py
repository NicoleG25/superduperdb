from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/documents/query', methods=['POST'])
def handle_query():
    try:
        data = request.json
        input_text = data.get('query')
        collection_name = data.get('collection_name')

        # Process the input_text and collection_name here
        # Replace this with your actual processing logic
        # For example, you can use a machine learning model or database query

        # For demonstration purposes, returning a simple response
        response = {'answer': f'Response to "{input_text}" from collection "{collection_name}"'}
        
        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
